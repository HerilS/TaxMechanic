import React, { Component } from 'react';
import { Section1, Section2, Section3, Section4, Section5 } from "./HomepageSections";

export default class Homepage extends Component {
    render() {
        return (
            <div className="MainHomepageBody"> 
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            </div>
        )
    }
}