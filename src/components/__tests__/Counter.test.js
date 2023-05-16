import { describe, it, expect } from "vitest";
import CounterView from "../../views/CounterView.vue";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  const wrapper = mount(CounterView);
  it("Should Render Correctly", () => {
    //as the next line will use in every it, we moves it to the upper level,
    // const wrapper = mount(CounterView);

    //instead of toMatchSnapShot(), we are using toContain
    // expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.html()).toContain("Counter is : 0");
  });

  it("Should Increment", async () => {
    await wrapper.find("#increment").trigger("click");
    expect(wrapper.html()).toContain("Counter is : 1");
    // expect(wrapper.find("#increment")).toMatchSnapshot();
  });

  it("Should Decrement", async () => {
    await wrapper.find("#decrement").trigger("click");
    expect(wrapper.html()).toContain("Counter is : 0");
    // expect(wrapper.find("#increment")).toMatchSnapshot();
  });

  it("Should Content Input Items", async () => {
    // const wrapper = mount(CounterView)
    expect(wrapper.find("#message").exists()).toBeTruthy();
    expect(wrapper.find("input[type='text']").exists()).toBeTruthy();
    expect(wrapper.find("#inputMessage").exists()).toBeTruthy();
  });

  it("should change the message on H2 Tag", async () => {
    await wrapper.find("input[type='text']").setValue("Learn Vue");
    await wrapper.find("#inputMessage").trigger("click");
    expect(wrapper.find("#message").text()).toEqual("Learn Vue");
  });
});
