import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

describe('when an initial value is provided', () => {
  it('it is rendered by the component', () => {
    const wrapper = shallow(Counter, {
      propsData: { initialValue: 42 },
    });
    expect(wrapper.text()).to.include('Counter value: 42');
  });
});
 
describe('when omitting the initial value', () => {
  it('the default value 0 is rendered by the component', () => {
    const wrapper = shallow(Counter, {
      propsData: { },
    });
    expect(wrapper.html()).to.include('Counter value: <span class="counter-value">0</span>');
  });
});

describe('the stringValue computed', () => {
  let wrapper;
  let componentInstance;
  beforeEach(() => {
    wrapper = shallow(Counter, {
      propsData: { initialValue: 42 },
    });
    componentInstance = wrapper.vm;
  });
  it('returns the string representation of the initial value', () => {
    expect(componentInstance.stringValue).to.be.eql("42");
  });
  it('returns the string representation of the updated value', () => {
    wrapper.setData({ value: 99 });
    expect(componentInstance.stringValue).to.be.eql("99");
  });
});

