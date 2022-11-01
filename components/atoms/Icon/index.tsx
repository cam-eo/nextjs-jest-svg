import { FC } from "react";
import { iconMap, IconName } from "./map";

interface Props {
  name: IconName;
  className?: string;
  size?: string;
}

export const Icon: FC<Props> = ({ name, className, size = "24" }) => {
  const Icon = iconMap[name];

  return (
    <Icon className={className} fill="#123456" height={size} width={size} />
  );
};
