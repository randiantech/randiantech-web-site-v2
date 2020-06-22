import React from "react";
import "./AboutSection.css";
import { ABOUT_PAGE } from "../../data";
import { ab, p, h, c, t, b, li, f, i, sub, desc } from "../../meta";

export default class AboutSection extends React.Component {
  render() {
    const { header, body, footer } = ABOUT_PAGE;
    return (
      <>
        <div className={`${ab}-${p}-${h}-${c}`}>
          <div className={`${ab}-${p}-${h}-${t}`}>{header.title}</div>
          <div className={`${ab}-${p}-${h}-${sub}`}>{header.subtitle}</div>
          <div className={`${ab}-${p}-${h}-${desc}`}>{header.desc}</div>
        </div>
        <div className={`${ab}-${p}-${b}-${c}`}>
          <div className={`${ab}-${p}-${b}-${t}`}>{body.title}</div>
          <div className={`${ab}-${p}-${b}-${desc}`}>{body.desc}</div>
          <div className={`${ab}-${p}-${b}-${li}-${t}`}>{body.list.title}</div>
          <div className={`${ab}-${p}-${b}-${li}`}>
            {body.list.items.map((item, idx) => (
              <div
                className={`${ab}-${p}-${b}-${li}-${i}`}
                key={`rt-page-item-${idx}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className={`${ab}-${p}-${f}-${c}`}>
          <div>{footer.image}</div>
        </div>
      </>
    );
  }
}
