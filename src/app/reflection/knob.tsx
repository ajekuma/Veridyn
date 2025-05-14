import React, { useState } from "react";
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function BasicKnob() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e: KnobChangeEvent) => setValue(e.value)} min={0} max={10} />
        </div>
    )
}