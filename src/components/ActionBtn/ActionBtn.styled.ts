import styled from "styled-components";
import { SettingsOutline } from "@styled-icons/evaicons-outline/SettingsOutline";
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { COLORS } from "../../theam";

export const SettingBtn = styled(SettingsOutline)`
  height: 32px;
  width: auto;
  border: 1px solid ${COLORS.black};
  border-radius: 4px;
  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.primary};
  }
`;

export const DeleteBtn = styled(Delete)`
  height: 32px;
  width: auto;
  border: 1px solid ${COLORS.black};
  border-radius: 4px;
  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.primary};
  }
`;
