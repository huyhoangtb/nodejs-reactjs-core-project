import IEntity from "./base/IEntity";

export default interface IDomain extends IEntity {
    domain: string,
    orgIid: number,
}
