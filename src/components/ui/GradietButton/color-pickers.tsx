import React, { useRef, useState } from "react";
import Sketch from "@uiw/react-color-sketch";
import useClickOutside from "@/components/ui/hook/use-click-outside";
import { type Colors } from "@/components/ui/GradietButton/gradient";
import styles from './GradientButton.module.css';

interface ColorPickerProps {
  colors: Colors;
  setColors: React.Dispatch<React.SetStateAction<Colors>>;
  keyName: keyof Colors;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  setColors,
  keyName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleButton = () => setIsOpen((prev) => !prev);
  const handleClickOutside = () => setIsOpen(false);
  useClickOutside(
    [buttonRef as React.RefObject<HTMLElement>],
    handleClickOutside
  );

  return (
    <div ref={buttonRef} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={toggleButton}
        style={{
          width: 24,
          height: 24,
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          backgroundColor: colors[keyName],
        }}
      />
      <Sketch
        style={{
          position: "absolute",
          display: isOpen ? "block" : "none",
          top: "calc(100% + 8px)",
          zIndex: 100,
        }}
        color={colors[keyName]}
        disableAlpha
        onChange={(color) =>
          setColors((prev) => ({
            ...prev,
            [keyName]: color.hex,
          }))
        }
      />
    </div>
  );
};

interface ColorPickersProps {
  colors: Colors;
  setColors: React.Dispatch<React.SetStateAction<Colors>>;
}

const ColorPickers: React.FC<ColorPickersProps> = ({ colors, setColors }) => {
  const keys = Object.keys(colors) as (keyof Colors)[];

  return (
    <ul className={`${styles.colorList}`}>
      {keys.map((key) => (
        <li key={key}>
          <ColorPicker colors={colors} setColors={setColors} keyName={key} />
        </li>
      ))}
    </ul>
  );
};

export default ColorPickers;
