import React, { useState } from 'react';
import { SideBarMenuIcon, SideBarMenu } from '../SideBarMenu'
import { OutsideClick } from '../../../../hooks/useOutsideClick';


export function MenuIcon({ pageList = [], ...props }) {
  const [open, setOpen] = useState(false);
  const menuId = 'mobile-menu'

  return (
    <>
      <OutsideClick controls={{
        toggle: open,
        handleToggle: () => setOpen(false)
      }}>
        <SideBarMenuIcon open={open} setOpen={setOpen} aria-controls={menuId} />
        <SideBarMenu open={open} setOpen={setOpen} id={menuId} pageList={pageList} />
      </OutsideClick>
    </>
  )
}
