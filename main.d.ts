export declare class ic10Error {
    message: string;
    code: number;
    functionName: string;
    lvl: number;
    line: number;
    className: string;
    obj: any;
    constructor(caller: any, code: number, message: string, obj: any, lvl?: number);
    getCode(): number;
    getMessage(): string;
}
declare class Environ {
    #private;
    d0: Device;
    d1: Device;
    d2: Device;
    d3: Device;
    d4: Device;
    d5: Device;
    db: Chip;
    constructor(scope: InterpreterIc10);
    randomize(): void;
}
declare class Memory {
    #private;
    get scope(): InterpreterIc10;
    cells: Array<MemoryCell>;
    environ: Environ;
    aliases: Object;
    constructor(scope: any);
    cell(cell: string | number, op1?: any, op2?: any): any;
    getCell(cell: any): any;
    alias(name: any, link: string | number): this;
    define(name: any, value: string | number): void;
}
declare class MemoryCell {
    #private;
    value: any;
    constructor(scope: any);
    get(): any;
    set(value: any): this;
}
declare class Device {
    #private;
    get scope(): InterpreterIc10;
    slots: Slot[];
    On: number;
    Power: number;
    Error: number;
    Activate: number;
    ClearMemory: number;
    Lock: number;
    Setting: any;
    RecipeHash: number;
    RequiredPower: number;
    Flour: number;
    Fenoxitone: number;
    Milk: number;
    Egg: number;
    Iron: number;
    Gold: number;
    Carbon: number;
    Uranium: number;
    Copper: number;
    Steel: number;
    Hydrocarbon: number;
    Silver: number;
    Nickel: number;
    Lead: number;
    Electrum: number;
    Invar: number;
    Constantan: number;
    Solder: number;
    Plastic: number;
    Silicon: number;
    Salicylic: number;
    Alcohol: number;
    Oil: number;
    Potato: number;
    Tomato: number;
    Rice: number;
    Pumpkin: number;
    Yellow: number;
    Red: number;
    Orange: number;
    Green: number;
    Blue: number;
    constructor(scope: InterpreterIc10);
    randomize(): void;
    get(variable: any): any;
    set(variable: any, value: any): this;
    getSlot(op1: any, op2: any): any;
}
declare class Chip extends Device {
    constructor(scope: any);
}
declare class Slot {
    #private;
    get scope(): InterpreterIc10;
    Occupied: number;
    OccupantHash: number;
    Quantity: number;
    Damage: number;
    Class: number;
    MaxQuantity: number;
    PrefabHash: number;
    constructor(scope: InterpreterIc10);
    get(op1: any): any;
}
export declare class InterpreterIc10 {
    code: string;
    commands: {
        args: string[];
        command: string;
    }[];
    lines: string[];
    memory: Memory;
    position: number;
    interval: any;
    labels: {};
    constants: {};
    settings: {
        debug: boolean;
        debugCallback: Function;
        logCallback: Function;
        executionCallback: Function;
        tickTime: number;
    };
    constructor(code?: string, settings?: {});
    setSettings(settings?: object): InterpreterIc10;
    init(text: any): InterpreterIc10;
    stop(): InterpreterIc10;
    run(): this;
    prepareLine(): any;
    __issetLabel(x: string): boolean;
    define(op1: any, op2: any, op3: any, op4: any): void;
    alias(op1: any, op2: any, op3: any, op4: any): void;
    l(op1: any, op2: any, op3: any, op4: any): void;
    ls(op1: any, op2: any, op3: any, op4: any): void;
    s(op1: any, op2: any, op3: any, op4: any): void;
    move(op1: any, op2: any, op3: any, op4: any): void;
    add(op1: any, op2: any, op3: any, op4: any): void;
    sub(op1: any, op2: any, op3: any, op4: any): void;
    mul(op1: any, op2: any, op3: any, op4: any): void;
    div(op1: any, op2: any, op3: any, op4: any): void;
    mod(op1: any, op2: any, op3: any, op4: any): void;
    sqrt(op1: any, op2: any, op3: any, op4: any): void;
    round(op1: any, op2: any, op3: any, op4: any): void;
    trunc(op1: any, op2: any, op3: any, op4: any): void;
    ceil(op1: any, op2: any, op3: any, op4: any): void;
    floor(op1: any, op2: any, op3: any, op4: any): void;
    max(op1: any, op2: any, op3: any, op4: any): void;
    min(op1: any, op2: any, op3: any, op4: any): void;
    abs(op1: any, op2: any, op3: any, op4: any): void;
    log(op1: any, op2: any, op3: any, op4: any): void;
    exp(op1: any, op2: any, op3: any, op4: any): void;
    rand(op1: any, op2: any, op3: any, op4: any): void;
    sin(op1: any, op2: any, op3: any, op4: any): void;
    cos(op1: any, op2: any, op3: any, op4: any): void;
    tan(op1: any, op2: any, op3: any, op4: any): void;
    asin(op1: any, op2: any, op3: any, op4: any): void;
    acos(op1: any, op2: any, op3: any, op4: any): void;
    atan(op1: any, op2: any, op3: any, op4: any): void;
    yield(op1: any, op2: any, op3: any, op4: any): void;
    sleep(op1: any, op2: any, op3: any, op4: any): void;
    select(op1: any, op2: any, op3: any, op4: any): void;
    hcf(op1: any, op2: any, op3: any, op4: any): void;
    j(op1: any): void;
    jr(op1: any): void;
    jal(op1: number): void;
    __eq(op1?: number, op2?: number): number;
    __ge(op1?: number, op2?: number): number;
    __gt(op1?: number, op2?: number): number;
    __le(op1?: number, op2?: number): number;
    __lt(op1?: number, op2?: number): number;
    __ne(op1?: number, op2?: number): number;
    __ap(op1?: number, op2?: number, op3?: number, op4?: number): number;
    __na(x?: number, y?: number, d?: number, op4?: number): number;
    __dse(op1?: number, op2?: number, op3?: number, op4?: number): number;
    __dns(op1?: number, op2?: number, op3?: number, op4?: number): number;
    seq(op1: any, op2: any, op3: any, op4: any): void;
    seqz(op1: any, op2: any, op3: any, op4: any): void;
    sge(op1: any, op2: any, op3: any, op4: any): void;
    sgez(op1: any, op2: any, op3: any, op4: any): void;
    sgt(op1: any, op2: any, op3: any, op4: any): void;
    sgtz(op1: any, op2: any, op3: any, op4: any): void;
    sle(op1: any, op2: any, op3: any, op4: any): void;
    slez(op1: any, op2: any, op3: any, op4: any): void;
    slt(op1: any, op2: any, op3: any, op4: any): void;
    sltz(op1: any, op2: any, op3: any, op4: any): void;
    sne(op1: any, op2: any, op3: any, op4: any): void;
    snez(op1: any, op2: any, op3: any, op4: any): void;
    sap(op1: any, op2: any, op3: any, op4: any): void;
    sapz(op1: any, op2: any, op3: any, op4: any): void;
    sna(op1: any, op2: any, op3: any, op4: any): void;
    snaz(op1: any, op2: any, op3: any, op4: any): void;
    sdse(op1: any, op2: any, op3: any, op4: any): void;
    sdns(op1: any, op2: any, op3: any, op4: any): void;
    beq(op1: any, op2: any, op3: any, op4: any): void;
    beqz(op1: any, op2: any, op3: any, op4: any): void;
    bge(op1: any, op2: any, op3: any, op4: any): void;
    bgez(op1: any, op2: any, op3: any, op4: any): void;
    bgt(op1: any, op2: any, op3: any, op4: any): void;
    bgtz(op1: any, op2: any, op3: any, op4: any): void;
    ble(op1: any, op2: any, op3: any, op4: any): void;
    blez(op1: any, op2: any, op3: any, op4: any): void;
    blt(op1: any, op2: any, op3: any, op4: any): void;
    bltz(op1: any, op2: any, op3: any, op4: any): void;
    bne(op1: any, op2: any, op3: any, op4: any): void;
    bnez(op1: any, op2: any, op3: any, op4: any): void;
    bap(op1: any, op2: any, op3: any, op4: any): void;
    bapz(op1: any, op2: any, op3: any, op4: any): void;
    bna(op1: any, op2: any, op3: any, op4: any): void;
    bnaz(op1: any, op2: any, op3: any, op4: any): void;
    bdse(op1: any, op2: any, op3: any, op4: any): void;
    bdns(op1: any, op2: any, op3: any, op4: any): void;
    breq(op1: any, op2: any, op3: any, op4: any): void;
    breqz(op1: any, op2: any, op3: any, op4: any): void;
    brge(op1: any, op2: any, op3: any, op4: any): void;
    brgez(op1: any, op2: any, op3: any, op4: any): void;
    brgt(op1: any, op2: any, op3: any, op4: any): void;
    brgtz(op1: any, op2: any, op3: any, op4: any): void;
    brle(op1: any, op2: any, op3: any, op4: any): void;
    brlez(op1: any, op2: any, op3: any, op4: any): void;
    brlt(op1: any, op2: any, op3: any, op4: any): void;
    brltz(op1: any, op2: any, op3: any, op4: any): void;
    brne(op1: any, op2: any, op3: any, op4: any): void;
    brnez(op1: any, op2: any, op3: any, op4: any): void;
    brap(op1: any, op2: any, op3: any, op4: any): void;
    brapz(op1: any, op2: any, op3: any, op4: any): void;
    brna(op1: any, op2: any, op3: any, op4: any): void;
    brnaz(op1: any, op2: any, op3: any, op4: any): void;
    brdse(op1: any, op2: any, op3: any, op4: any): void;
    brdns(op1: any, op2: any, op3: any, op4: any): void;
    beqal(op1: any, op2: any, op3: any, op4: any): void;
    beqzal(op1: any, op2: any, op3: any, op4: any): void;
    bgeal(op1: any, op2: any, op3: any, op4: any): void;
    bgezal(op1: any, op2: any, op3: any, op4: any): void;
    bgtal(op1: any, op2: any, op3: any, op4: any): void;
    bgtzal(op1: any, op2: any, op3: any, op4: any): void;
    bleal(op1: any, op2: any, op3: any, op4: any): void;
    blezal(op1: any, op2: any, op3: any, op4: any): void;
    bltal(op1: any, op2: any, op3: any, op4: any): void;
    bltzal(op1: any, op2: any, op3: any, op4: any): void;
    bneal(op1: any, op2: any, op3: any, op4: any): void;
    bnezal(op1: any, op2: any, op3: any, op4: any): void;
    bapal(op1: any, op2: any, op3: any, op4: any): void;
    bapzal(op1: any, op2: any, op3: any, op4: any): void;
    bnaal(op1: any, op2: any, op3: any, op4: any): void;
    bnazal(op1: any, op2: any, op3: any, op4: any): void;
    bdseal(op1: any, op2: any, op3: any, op4: any): void;
    bdnsal(op1: any, op2: any, op3: any, op4: any): void;
    push(op1: any, op2: any, op3: any, op4: any): void;
    pop(op1: any, op2: any, op3: any, op4: any): void;
    peek(op1: any, op2: any, op3: any, op4: any): void;
    _log(): void;
    __debug(p: string, iArguments: string[]): void;
}
export {};
