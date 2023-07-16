import { useLanguage } from "../../../contexts/LanguageContext";

import { Menu, MenuItem, Box } from "@mui/material";
import { languagesList } from "../../../utils/constants";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const LanguageSelect = ({ sx, minWidth = "105px" }: any) => {
  const { setLanguage, language } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguage = (lang: any) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box onClick={handleClick} sx={sx}>
        <LanguageIcon sx={{ mx: 0.5 }} />
        <Box component="span">
          {languagesList.find((lang: any) => lang.value === language)?.label}
        </Box>
        <ArrowDropDownIcon sx={{ mx: 0.5 }} />
      </Box>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {languagesList.map((lang) => (
          <MenuItem
            key={lang.value}
            selected={lang.value === language}
            onClick={() => handleLanguage(lang.value)}
            sx={{ minWidth }}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelect;
