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
    /**
     * * this is a neive way to fill the store data
     */

    // fill() {
    //   import("../teamMembers.json").then((r) => {
    //     let data = r.default;

    //     this.name = data.name;
    //     this.spots = data.spots;
    //     this.members = data.members;

    //     console.log(this.name, this.spots, this.members);
    //   });
    // },

    /**
     * * receive data using the patch option
     */
    // fill() {
    //   import("../teamMembers.json").then((r) => {
    //     let data = r.default;

    //     this.$patch({
    //       name: data.name,
    //       spots: data.spots,
    //       members: data.members,
    //     });
    //   });
    // },

    /**
     * * update the state directly
     */

    async fill() {
      let r = await import("../teamMembers.json");
      this.$state = r.default;
    },

    grow(slot) {
      this.spots = slot;
    },
  },

  getters: {
    remainingSpots() {
      return this.spots - this.members.length;
    },
  },
});
