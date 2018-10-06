import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
const Search = Input.Search;
const Option = Select.Option;

const Filters = props => {
  return (
    <section className="filters">
      <h1>
        FILTERS <Icon type="filter" theme="outlined" />:
      </h1>
      <Row className="_spacer-md">
        <Col md={12}>
          <h5 className="_text-pumpkin">Country:</h5>
          <Select
            showSearch
            labelInValue
            placeholder="Search country ex. Phillippines"
            notFoundContent={props.loading ? <Spin size="small" /> : null}
            filterOption={false}
            onSearch={props.onSearchCountry}
            onChange={props.onSelectCountry}
            style={{ width: 300 }}
          >
            {props.countries.map(c => (
              <Option key={c.name} data={c}>
                {c.name}
              </Option>
            ))}
          </Select>
        </Col>

        <Col md={12}>
          <h5 className="_text-pumpkin">City:</h5>
          <Search
            placeholder="Search city ex. Pasig City"
            onChange={props.onGetCity}
            style={{ width: 300 }}
            disabled={props.allowCity}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Filters;
