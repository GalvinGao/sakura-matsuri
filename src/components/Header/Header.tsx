import { ButtonBase } from "@mui/material";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { LanguageSettings } from "../LanguageSettings";

export const TOPICS = [
  { title: "intro" },
  { title: "map" },
  { title: "schedule" },
  { title: "president-message" },
  { title: "admission" },
  { title: "sponsors" },
  { title: "contact" },
  { title: "faq" },
];

export function Header() {
  const { t } = useTranslation();
  return (
    <header className="flex flex-col items-start justify-center bg-pink-50 shadow w-full pb-1">
      <div className="h-12 md:h-14 flex items-center w-full px-4 py-1">
        <div className="inline-flex items-center justify-between font-bold">
          {t("title")}
        </div>
        <div className="flex-1">&nbsp;</div>
        <LanguageSettings />
      </div>

      <div className="px-4 h-8 md:h-9 flex items-center justify-start gap-1 overflow-x-auto  w-full">
        {TOPICS.map((el, i) => (
          <ButtonBase
            key={i}
            className={clsx(
              "flex items-center text-center w-full rounded-full px-3 h-full snap-x snap-mandatory whitespace-nowrap",
              i === 0 ? "bg-pink-200" : undefined
            )}
          >
            {t("sections." + el.title)}
          </ButtonBase>
        ))}
      </div>
    </header>
  );
}
