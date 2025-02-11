import React from 'react';
import { logout, Helper, Storage, AUTHORIZATION_KEY, env } from 'aesirx-lib';
import { Dropdown } from 'react-bootstrap';
import { Image } from 'components/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { useTranslation } from 'react-i18next';

const Profile = ({ data }: any) => {
  const { t } = useTranslation();

  const CustomToggleAvatar = React.forwardRef(({ onClick }: any, ref: any) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="d-flex align-items-center text-decoration-none cursor-pointer"
    >
      <Image
        src={
          Helper.isValidUrl(Storage.getItem(AUTHORIZATION_KEY.AVATAR) ?? '')
            ? Storage.getItem(AUTHORIZATION_KEY.AVATAR)
            : env.PUBLIC_URL + '/assets/images/avatar.png'
        }
        alt=""
        className="img-avatar rounded-circle object-fit-cover h-45"
      />
      <div className="text ps-16 pe-2">
        <p className="mb-0 text-blue-0 fs-14 fw-bold">
          {Storage.getItem(AUTHORIZATION_KEY.MEMBER_FULL_NAME) ?? 'Admin'}
        </p>
      </div>
      <i className="icons text-green">
        <FontAwesomeIcon icon={faChevronDown} />
      </i>
    </div>
  ));

  return (
    <div className="pe-3">
      <div className="wrapper_avatar position-relative">
        <Dropdown>
          <Dropdown.Toggle
            as={CustomToggleAvatar}
            id="dropdown-custom-components position-relative"
          ></Dropdown.Toggle>
          <Dropdown.Menu className="shadow border-0">
            {data && (
              <div className="p-16">
                <ul className="list-unstyled ps-0 mb-0 list_menu_avatar">
                  {data?.map((value: any, index: any) => {
                    return (
                      <li key={index}>
                        <Dropdown.Item
                          href={value.link}
                          className="text-blue-0 d-block rounded-1 text-decoration-none p-16"
                        >
                          {t(value.text)}
                        </Dropdown.Item>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div
              onClick={logout}
              className="d-flex align-items-center p-16 text-green border-gray cursor-pointer"
            >
              <span className="px-16">{t('txt_sign_out')}</span>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export { Profile };
