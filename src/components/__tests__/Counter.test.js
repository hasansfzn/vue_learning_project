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
    await wrapper.find("button").trigger("click");
    expect(wrapper.html()).toContain("Counter is : 1");
  });
});
