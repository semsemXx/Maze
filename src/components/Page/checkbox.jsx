import React from "react";
import styled from "styled-components";

const Checkbox = () => {
  return (
    <StyledWrapper>
      <label className="checkbox__label" htmlFor="checkbox">
        <span className="checkbox__container">
          <input className="checkbox" id="checkbox" type="checkbox" />

          <span className="checkbox__label--text"> Done </span>
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .checkbox__container {
    --primary-clr-1: #ffffff;
    --primary-clr-2: #ffffff;
    --text-clr-1: #ffffff;
    --checkbox-bg-clr: #000000;
    --checkbox-border-clr: #ffffff;
    color: var(--text-clr-1);
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .checkbox {
    --dimension: 1.3em;
    --tick-dimension: 0.15em;

    appearance: none;
    margin: 0;
    position: relative;
    width: var(--dimension);
    height: var(--dimension);
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    rotate: 45deg;
  }

  .checkbox:checked {
    animation: shrink 0.25s ease forwards;
  }

  .checkbox:not(:checked) {
    animation: grow 0.25s 0.375s ease forwards;
  }

  @keyframes shrink {
    0% {
      scale: 1;
      background-color: var(--checkbox-bg-clr);
      border: solid 1px var(--checkbox-border-clr);
    }
    50% {
      scale: 0;
      background-color: var(--checkbox-bg-clr);
      border: solid 1px var(--checkbox-border-clr);
    }
    51% {
      scale: 0;
      background-color: transparent;
      border: solid 1px transparent;
    }
    100% {
      scale: 1;
      background-color: transparent;
      border: solid 1px transparent;
    }
  }

  @keyframes grow {
    0% {
      scale: 0;
      background-color: transparent;
      border: solid 1px transparent;
    }

    100% {
      scale: 1;
      background-color: var(--checkbox-bg-clr);
      border: solid 1px var(--checkbox-border-clr);
    }
  }

  .checkbox:before,
  .checkbox:after {
    content: "";
    position: absolute;
    top: calc(50% - var(--tick-dimension) / 2);
    left: calc(50% - var(--tick-dimension) / 2);
    width: var(--tick-dimension);
    height: var(--tick-dimension);
    border-radius: 10rem;
  }

  .checkbox::before {
    background-color: transparent;
    top: calc(var(--dimension) * 0.65);
    left: 0;
    width: var(--tick-dimension);
  }

  .checkbox:not(:checked)::before {
    transition: background-color 0.15s 0.25s ease-in-out, width 0.25s ease-in-out;
  }

  .checkbox:checked::before {
    background-color: var(--primary-clr-1);
    top: calc(var(--dimension) * 0.65);
    left: 0;
    width: calc(var(--dimension) / 2);
    transition: background-color 0.15s 0.15s ease-in-out,
      width 0.25s 0.375s ease-in-out;
  }

  .checkbox::after {
    background-color: transparent;
    top: 0;
    left: calc((var(--dimension) * 0.5) - var(--tick-dimension));
    height: var(--tick-dimension);
  }

  .checkbox:not(:checked)::after {
    transition: background-color 0.15s 0.25s ease-in-out, height 0.25s ease-in-out;
  }

  .checkbox:checked::after {
    background-color: var(--primary-clr-2);
    top: 0;
    left: calc((var(--dimension) * 0.5) - var(--tick-dimension));
    height: calc(var(--dimension) * 0.75);
    transition: background-color 0.15s 0.15s ease-in-out, height 0.25s 0.5s ease-in-out;
  }

  .checkbox__label {
    --hover: #cdcdcd;
    --checked: #8f8f8f49;
    --stroke-dimension: 0.05em;

    cursor: pointer;
    user-select: none;
    scale: 1.5;
    transition: color 0.15s;
  }

  .checkbox__label:hover {
    color: var(--hover);
  }

  .checkbox:checked + .checkbox__label--text {
    color: var(--checked);
  }

  .checkbox__label--text {
    position: relative;
  }

  .checkbox__label--text::before {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(-1 * var(--stroke-dimension));
    width: var(--stroke-dimension);
    height: var(--stroke-dimension);
    margin-right: 0.5em;
    border-radius: 1em;
  }

  .checkbox__label--text::before {
    background-color: var(--primary-clr-1);
    width: 0;
    transition: width 0.25s, background-color 0.15s 0.25s;
  }

  .checkbox:checked + .checkbox__label--text::before {
    background-color: var(--checked);
    width: calc(100% + var(--stroke-dimension));
    transition: width 0.625s 0.375s, background-color 0.25s 1s;
  }
`;

export default Checkbox;
