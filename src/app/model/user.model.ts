export interface IUserData {
    productIds: string[],
    profile: IProfile;
}

export interface IProfile {
    // email: string;
    // password: string;
    name?: string;
    surname?: string;
    phone?: string;
}
