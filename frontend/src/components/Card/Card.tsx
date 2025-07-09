import EditButton from '../Button/EditButton';
import DeleteButton from '../Button/DeleteButton';
import type { CardProps } from './types';
import { Styles } from './styles';
import { useState } from 'react';
import { partial } from 'lodash/fp';


const Card = <T extends object>({ item, ItemPrint, editItem, deleteItem, EditItemModal }: CardProps<T>) => {
  const classes = Styles()
  const [openEditModal, setOpenEditModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState<T | null>(null);

  const handleEditClick = (item: T) => {
      setItemToEdit(item);
      setOpenEditModal(true);
  };

  return (
    <div className={classes.card}>
      <ItemPrint item={item}/>
      <div className={classes.buttonGroup}>
        {editItem && (
          <EditButton onClick={partial(handleEditClick, [item])} />
        )}
        {deleteItem && (
          <DeleteButton onClick={partial(deleteItem, [item])} />
        )}
      </div>
      {openEditModal && itemToEdit && EditItemModal && editItem && (
        <EditItemModal
            {...itemToEdit}
            onClose={partial(setOpenEditModal,[false])}
            editItem={editItem}
        />
      )}
    </div>
  )
}

export { Card }