

function NavContent(contentIndex){
    const content={
        0: [

                <ul>
                    <li>React is extremely popular</li>
                    <li>It makes building complex, interactive UIs a breeeze</li>
                    <li>It's powerful & flexible</li>
                    <li>It has a very active and versatile ecosystem</li>
                </ul>

        ],
        1:[

                <ul>
                <li>Components, JSX & Props</li>
                <li>State</li>
                <li>Hooks (e.g., useEffect())</li>
                <li>Dynamic rendering</li>
                </ul>

        ],
        2:[

                <ul>
                <li>Official web page (react.dev)</li>
                <li>Next.js (Fullstack framework)</li>
                <li>React Native (build native mobile apps with React)</li>
                </ul>

        ],
        3: [

                <ul>
                <li>Vanilla JavaScript requires imperative programming</li>
                <li>Imperative Programming: You define all the steps needed to achieve a result</li>
                <li>React on the other hand embraces declarative programming</li>
                <li>With React, you define the goal and React figures out how to get there</li>
                </ul>

        ]

    }

    return content[contentIndex]
}

export default NavContent