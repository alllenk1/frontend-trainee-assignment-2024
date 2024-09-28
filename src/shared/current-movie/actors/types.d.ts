export type ActorType = {
    photo: string;
    name: string;
    enName: string;
    profession: string;
    enProfession: string;
};

export type ActorsProps = {
    persons: ActorType[];
};
