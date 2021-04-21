import React from "react";

/**
 * interface that defines the props of the component
 *
 * @interface
 */
interface ModalHeaderProps {
  /**
   * the text that will show with the accent color
   *
   * @type {string}
   */
  accentText: string;

  /**
   * to reverse the noraml and accent color texts order
   *
   * @type {string}
   */
  reverseOrder: string;

  /**
   * the normal text
   *
   * @type {string}
   */
  text: string;
}

export const ModalHeader = ({
  accentText,
  text,
  reverseOrder,
}: ModalHeaderProps) => {
  return reverseOrder ? (
    <h3 className="efents-style">
      <span className="accent">{accentText}</span>
      {text}
    </h3>
  ) : (
    <h3>
      {text}
      <span className="accent">{accentText}</span>
    </h3>
  );
};
