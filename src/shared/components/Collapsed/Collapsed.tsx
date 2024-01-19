import {ReactNode, useEffect, useState} from 'react';

type CollapsedProps = {
    edge: number;
    collapsedSlot?: ReactNode;
    notCollapsedSlot?: ReactNode;
};

const Collapsed = ({ edge, collapsedSlot, notCollapsedSlot }: CollapsedProps) => {
    const [isCollapse, setIsCollapse] = useState(window.innerWidth <= edge);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= edge)
                setIsCollapse(true);
            else
                setIsCollapse(false);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isCollapse ? collapsedSlot : notCollapsedSlot;
};

export default Collapsed;
