"use client";
import React from "react";
import style from "./toggleIcon.module.css";
import { useTheme } from "next-themes";

export default function ToggleIcon() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <input
        type='checkbox'
        id='toggle_checkbox'
        className={style.toggle_checkbox}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      />
      <label htmlFor='toggle_checkbox' className={style.label}>
        <div id='star' className={style.starContainer}></div>
        <div className={style.moon}></div>
      </label>
    </div>
  );
}
