import React from "react";
import FlexContainer from "../FlexContainer";
import { useTableRow } from "../../hooks/useTableRow.hook";
import { IContact } from "../../types/data.types";
import { SPACES } from "../../theam";
import { motion } from "framer-motion";
import * as Styled from "./TableRow.styled";

interface IProps {
  item: IContact;
}
export default function TableRow({ item }: IProps) {
  const { openModal, handleDelete } = useTableRow(item);
  return (
    <>
      <td>{item.name}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.status}</td>
      <td>
        <FlexContainer gap={SPACES.s}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Styled.SettingBtn onClick={openModal} data-tip="Edite contact" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Styled.DeleteBtn
              onClick={handleDelete}
              data-tip="Delete contact"
            />
          </motion.div>
        </FlexContainer>
      </td>
    </>
  );
}
