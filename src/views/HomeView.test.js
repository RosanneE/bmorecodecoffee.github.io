import HomeView from './HomeView.vue';
import { describe, beforeEach, it} from "vitest";
import { render, screen } from "@testing-library/vue";

describe("Home view component", () => {
    beforeEach(() => {
        render(HomeView);
    });

    it("contains a link to the baltimore tech slack", () => {
        // Should throw an error if we don't have the link to the slack
        screen.getByRole("link", {name: "Baltimore Tech Slack"});
    });
})