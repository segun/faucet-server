import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "user"})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column("simple-array")
    walletAddresses: string[];
    // amounts: string[]; TODOfu
    @Column()
    ipAddress: string;
    @Column("simple-array")
    networks: Array<"Gnosis Chain"|"Chiado Testnet"|"Optimism L2">;
    @Column()
    expiry: string;
}