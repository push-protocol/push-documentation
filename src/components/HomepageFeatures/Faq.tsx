import React, { useState, useEffect, useRef } from "react";
import "../../css/custom.css"

type FaqItems = {
    title: string;
    description: JSX.Element;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    OpenSvg: React.ComponentType<React.ComponentProps<'svg'>>;
}

const Faq: FaqItems[] = [
    {
        title: 'What is Push?',
        Svg: require('@site/static/img/addicon.svg').default,
        OpenSvg: require('@site/static/img/minusicon.svg').default,
        description: (
            <>
                Push is a communication platform that helps businesses send and receive notifications. Push is a communication platform that helps businesses send and receive notifications.
            </>
        ),
    },
    {
        title: 'How do I contact customer support?',
        Svg: require('@site/static/img/addicon.svg').default,
        OpenSvg: require('@site/static/img/minusicon.svg').default,
        description: (
            <>
                Push is a communication platform that helps businesses send and receive notifications. Push is a communication platform that helps businesses send and receive notifications.
            </>
        ),
    },
    {
        title: 'What is Push trying to solve?',
        Svg: require('@site/static/img/addicon.svg').default,
        OpenSvg: require('@site/static/img/minusicon.svg').default,
        description: (
            <>
                Push is a communication platform that helps businesses send and receive notifications. Push is a communication platform that helps businesses send and receive notifications.
            </>
        ),
    },
    {
        title: 'How can I use Push as an end-user?',
        Svg: require('@site/static/img/addicon.svg').default,
        OpenSvg: require('@site/static/img/minusicon.svg').default,
        description: (
            <>
                Push is a communication platform that helps businesses send and receive notifications. Push is a communication platform that helps businesses send and receive notifications.
            </>
        ),
    },
    {
        title: 'What are the web3 communication products launched by Push?',
        Svg: require('@site/static/img/addicon.svg').default,
        OpenSvg: require('@site/static/img/minusicon.svg').default,
        description: (
            <>
                Push is a communication platform that helps businesses send and receive notifications. Push is a communication platform that helps businesses send and receive notifications.
            </>
        ),
    },
    {
        title: 'Do I have to pay to send notifications?',
        Svg: require('@site/static/img/addicon.svg').default,
        OpenSvg: require('@site/static/img/minusicon.svg').default,
        description: (
            <>
                Push is a communication platform that helps businesses send and receive notifications. Push is a communication platform that helps businesses send and receive notifications.
            </>
        ),
    },
]

function FAQCard({ title, Svg, OpenSvg, description }: FaqItems) {
    const [active, setActive] = useState(false);

    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };
    return (
        <div className="App">
            <div>
                <button
                    className={`question-section ${active}`}
                    onClick={toggleAccordion}
                >
                    <div>
                        <div className="question-align">
                            <h4 className="question-style">
                                {title}
                            </h4>
                            {active ? (
                                <OpenSvg className="icon" />
                            ) : (
                                <Svg className="icon" />
                            )}
                        </div>
                        <div
                            ref={contentRef}
                            className={active ? `answer answer-divider` : `answer`}
                        >
                            <p className="answer-style">{description}</p>
                        </div>
                    </div>
                </button>
            </div>
            <hr style={{ maxWidth: "80%", margin: "auto", backgroundColor: "#fffff", marginBottom: "30px" }} />
        </div>
    )
}

export default function FAQ() {
    return (
        <div style={{ gap: "30px" }}>
            {Faq.map((props, idx) => (
                <FAQCard key={idx} {...props} />
            ))}
        </div>
    )
}