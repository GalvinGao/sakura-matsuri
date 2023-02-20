import mdiTranslate from "@iconify/icons-mdi/translate";
import { Icon } from "@iconify/react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGE_OPTIONS = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "ja",
    name: "日本語",
  },
];

export const LanguageSettings = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { i18n } = useTranslation();

  const handleActivatorClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const activeLanguage = useMemo(
    () => LANGUAGE_OPTIONS.find((option) => option.id === i18n.language),
    [i18n.language]
  );

  useEffect(() => {
    document.documentElement.lang = activeLanguage?.id ?? "en";
  }, [activeLanguage]);

  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleActivatorClick}
      >
        <Icon icon={mdiTranslate} />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {LANGUAGE_OPTIONS.map((lang) => (
          <MenuItem
            key={lang.id}
            onClick={() => {
              i18n.changeLanguage(lang.id);
              handleClose();
            }}
            selected={lang.id === activeLanguage?.id}
          >
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
