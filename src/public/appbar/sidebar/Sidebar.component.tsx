import React from 'react';
import { Offcanvas } from 'react-bootstrap';

interface SidebarVO { sidebarBody: () => React.ReactElement; }

export const Sidebar: React.FC<SidebarVO> = (
  props: SidebarVO,
) => {
    const { sidebarBody } = props;
    return (
        <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Course Panel</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {sidebarBody()}
          </Offcanvas.Body>
        </>
    )
}