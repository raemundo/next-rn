import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

type Meta = {
  hid: any;
  name: string;
  content: string;
};

type Script = {
  type: string;
  innerHTML: any;
};

type MetaInfo = {
  title: string;
  meta?: Array<Meta>;
  script?: Array<Script>;
};

type Props = {
  metaInfo: MetaInfo;
};

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
