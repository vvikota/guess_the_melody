import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAuthorization from "./with-authorization";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAuthorization(MockComponent);

describe(`withAuthorization`, () => {
  it(`Should change value when call onChange`, () => {
    const wrapper = shallow(<MockComponentWrapped
      onSignInButtonClick={jest.fn()}
    />);

    expect(wrapper.props().email).toEqual(`test@test.ru`);
    expect(wrapper.props().password).toEqual(`pass`);

    wrapper.props().onChange({target: {
      name: `email`,
      value: `NEWemail@email.ru`,
    }});
    expect(wrapper.props().email).toEqual(`NEWemail@email.ru`);
    expect(wrapper.props().password).toEqual(`pass`);

    wrapper.props().onChange({target: {
      name: `email`,
      value: `email@email.ru`,
    }});
    wrapper.props().onChange({target: {
      name: `password`,
      value: `NEWpassword`,
    }});
    expect(wrapper.props().email).toEqual(`email@email.ru`);
    expect(wrapper.props().password).toEqual(`NEWpassword`);
  });

});
