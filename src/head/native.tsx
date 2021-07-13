import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Props } from "./types";

function NHead({ metaInfo: { title, meta, script } }: Props) {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);
  return null;
}

export default NHead;
