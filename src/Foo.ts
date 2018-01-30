import { Bar } from "./Bar";

export interface Foo {
    interfaceProp: Bar;
}

export interface ReallyLongLineLengthToSeeHowTheBreaksWillWorkOutAndGenerics<T1, T2> {
    one: T1;

    two: T2;
}
