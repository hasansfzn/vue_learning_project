import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
  state() {
    return {
      name: "",
      spots: 0,
      members: [],
    };
  },
  actions: {
    fill() {
      import("../teamMembers.json").then((r) => {
        let data = r.default;

        this.name = data.name;
        this.spots = data.spots;
        this.members = data.members;

        console.log(this.name, this.spots, this.members);
      });
    },
  },
});
