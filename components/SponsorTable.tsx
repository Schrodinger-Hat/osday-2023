import React from 'react';
import Image from "next/image";

type TSponsorTable = {
    isVisible: boolean
};

const SponsorTable = ({isVisible} : TSponsorTable) => {
    if (isVisible) {
        return (
            <>
                <section className="current_sponsors">
                <h2 className="sponsors_thanks" style={{ textAlign: "center" }}>Thanks to our sponsors</h2>
                <h3 className="sponsors_tier">Supporter</h3>
                <div className="sponsors_logo">
                    <a href="https://www.nanabianca.it/" target="_blank" rel="noreferrer">
                    <Image width={300} height={150} src="/nanabianca_logo.svg" alt="Nana Bianca" />
                    </a>
                </div>
                <h3 className="sponsors_tier">Diamond</h3>
                <div className="sponsors_logo">
                    <a href="https://devmy.it/" target="_blank" rel="noreferrer">
                    <Image width={300} height={100} src="/devmy_logo.svg" alt=".devmy" />
                    </a>
                </div>
                <h3 className="sponsors_tier">Silver</h3>
                <div className="sponsors_logo">
                    <a href="https://www.nephila.digital/" target="_blank" rel="noreferrer">
                    <Image width={300} height={100} src="/nephila_logo.svg" alt="Nephila" />
                    </a>
                </div>
                <h3 className="sponsors_tier">Media</h3>
                <div className="sponsors_logo">
                    <a href="https://www.wearedevelopers.com/" target="_blank" rel="noreferrer">
                    <Image width={150} height={150} src="/WeAreDevelopers_logo.svg" alt="WeAreDevelopers" />
                    </a>
                    <a href="https://kube.events/" target="_blank" rel="noreferrer">
                    <Image width={100} height={100} src="/kube-events_logo.svg" alt="Kube Events" />
                    </a>
                    <a href="https://kube.careers/" target="_blank" rel="noreferrer">
                    <Image width={80} height={80} src="/kube-careers_logo.svg" alt="Kube Careers" />
                    </a>
                </div>
                <h3 className="sponsors_tier">Swag</h3>
                <div className="sponsors_logo">
                    <a href="https://www.gitkraken.com/" target="_blank" rel="noreferrer">
                    <Image width={100} height={100} src="/gitkraken-logo-light-sq.svg" alt="Gitkraken" />
                    </a>
                    <a href="https://www.jetbrains.com/" target="_blank" rel="noreferrer">
                    <Image width={100} height={100} src="/jb_beam.svg" alt="JetBrains" />
                    </a>
                    <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                    <Image width={100} height={100} src="/github_logo.svg" alt="GitHub" />
                    </a>
                </div>
                <h3 className="sponsors_tier">Community</h3>
                <div className="sponsors_logo">
                    <a href="https://www.grusp.org/" target="_blank" rel="noreferrer">
                    <Image width={100} height={100} src="/grusp_logo.svg" alt="Grusp" />
                    </a>
                    <a href="https://www.theredcode.it/" target="_blank" rel="noreferrer">
                    <Image width={80} height={80} src="/the-red-code_logo.png" alt="TheRedCode" />
                    </a>
                    <a href="https://pisa.dev/" target="_blank" rel="noreferrer">
                    <Image width={150} height={150} src="/pisa-dev_logo.svg" alt="PisaDev" />
                    </a>
                    <a href="https://firenze.dev/" target="_blank" rel="noreferrer">
                    <Image width={100} height={100} src="/firenze-dev_logo.svg" alt="Firenzedev" />
                    </a>
                    <a href="https://www.pignolalug.it/" target="_blank" rel="noreferrer">
                    <Image width={100} height={100} src="/plug_logo.png" alt="Plug" />
                    </a>
                </div>
                </section>
            </>
        );
    }
    return null;
};

export default SponsorTable;
