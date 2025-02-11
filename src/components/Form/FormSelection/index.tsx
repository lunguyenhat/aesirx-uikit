/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React, { Component } from 'react';

import { AesirXSelect } from '../../Select';

class FormSelection extends Component<any, any> {
  field: any;
  constructor(props: any) {
    super(props);

    this.field = this.props.field;
  }

  render() {
    return (
      <AesirXSelect
        value={this.field.getValueSelected}
        options={this.field.getDataSelectOptions}
        className="mb-3 text-danger"
        isBorder={true}
        plColor="rgba(8, 18, 64, 0.8)"
        //onFocus={this.field.changed}
        onBlur={this.field.blurred}
        // isMulti={multi}
        onChange={this.field.handleChange}
      />
    );
  }
}

export { FormSelection };
