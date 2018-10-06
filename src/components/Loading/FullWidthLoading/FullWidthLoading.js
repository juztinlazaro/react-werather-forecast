import React from 'react';
import Spin from 'antd/lib/spin';
import Alert from 'antd/lib/alert';

const fullWidthLoading = props => {
  return (
    <section className="FullWidthLoading-section">
      <Spin
        delay={props.delay}
        indicator={props.indicator}
        size={props.size}
        spinning={props.spinning}
        tip={props.tip}
        wrapperClassName={props.wrapperClassName}
      >
        {props.alert ? (
          <Alert
            message={props.alertMessage}
            description={props.alertDescription}
            type={props.alertType}
          />
        ) : null}
      </Spin>
    </section>
  );
};

export default fullWidthLoading;
