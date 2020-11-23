import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatusOOP";

//To use this test you should use ProfileStatusOOP component. Juct rename it to ProfileStatus.js
describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create( < ProfileStatus userStatus = "test status" / > );
        const instance = component.getInstance();
        expect(instance.state.userStatus).toBe("test status");
    });
})