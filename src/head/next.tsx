import React from "react";
import Head from "next/head";
import { Props } from "./types";

function NHead({ metaInfo: { title, meta, script } }: Props) {
  return (
    <Head>
      <title>{title}</title>
      {meta &&
        meta.map((m) => <meta key={m.hid} name={m.name} content={m.content} />)}
      {script &&
        script.map((s, i) => (
          <script
            key={i}
            type={s.type}
            dangerouslySetInnerHTML={{ __html: s.innerHTML }}
          />
        ))}
    </Head>
  );
}

export default NHead;
