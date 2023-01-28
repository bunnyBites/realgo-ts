import React from 'react';
import clsx from 'clsx';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SIDEBAR_OPTIONS } from 'src/public/_shared/constants/sidebar/Sidebar.const';

type SidebarViewPropType = { pathName?: string; }

export const SidebarView: React.FC<SidebarViewPropType> = (
  props: SidebarViewPropType,
) => {
  const prepareSidebarBody = () => (
    <ul className="nav flex-column nav-pills nav-fill">
      {
        SIDEBAR_OPTIONS.map((sidebarOption) => (
          <li className="nav-item" id={sidebarOption.id} key={sidebarOption.id}>
              <Link
                  to={sidebarOption.webUrl}
                  className={clsx("nav-link text-nowrap rounded-0", {
                    active: (props.pathName && sidebarOption.webUrl === props.pathName)
                  })}
              >
                  {sidebarOption.title}
              </Link>
          </li>
        ))
      }
    </ul>
  );

    return (
        <>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Course Panel</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {prepareSidebarBody()}
          </Offcanvas.Body>
        </>
    )
}