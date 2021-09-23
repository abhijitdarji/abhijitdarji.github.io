export interface Portfolio {
    personal:       Personal;
    summary:        Summary;
    skills:         Skill[];
    skillRatings:   SkillRating[];
    projects:       Project[];
    education:      Credential[];
    certifications: Credential[];
}

export interface Credential {
    title:   string;
    details: string;
    image:   string;
    class:  string;
}

export interface Personal {
    name:        string;
    tagline:     string;
    currentWork: string;
    email:       string;
    address:     string;
    social:      Social;
}

export interface Social {
    facebook: string;
    github:   string;
    linkedin: string;
    google:   string;
    codepen:  string;
}

export interface Project {
    client:           string;
    clientLogo:       string;
    position:         string;
    duration:         string;
    title:            string;
    summary:          string;
    responsibilities: string[];
    environment:      string;
}

export interface SkillRating {
    title: string;
    value: number;
}

export interface Skill {
    title:   string;
    details: string;
}

export interface Summary {
    title:   string;
    details: string[];
}
