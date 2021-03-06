export declare const regexes: {
    rr1: RegExp;
    r1: RegExp;
    d1: RegExp;
    rr: RegExp;
    strStart: RegExp;
    strEnd: RegExp;
};
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
export declare var Execution: {
    error(code: number, message: string, obj?: any): ic10Error;
    display: (e: any) => any;
};
export declare class Environ {
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
export declare class Memory {
    #private;
    get scope(): InterpreterIc10;
    cells: Array<MemoryCell | MemoryStack>;
    environ: Environ;
    aliases: Object;
    constructor(scope: any);
    cell(cell: string | number, op1?: any, op2?: any): MemoryCell | any;
    getCell(cell: any): Device | MemoryStack | ConstantCell | any;
    alias(name: any, link: string | number): this;
    define(name: any, value: string | number): void;
    toLog(): {};
}
export declare class MemoryCell {
    #private;
    value: any;
    name: string;
    alias: null;
    constructor(scope: InterpreterIc10, name: string);
    getName(): string;
    get(_?: any): number;
    set(value: any, _?: any): MemoryCell;
}
export declare class MemoryStack extends MemoryCell {
    #private;
    value: number[];
    index: number;
    constructor(scope: any, name: string);
    push(value: number): MemoryStack;
    pop(): number;
    peek(): number;
    getStack(): number[];
    get(): number;
    set(value?: number): this;
}
export declare class ConstantCell extends MemoryCell {
    #private;
    value: any;
    constructor(value: any, scope: any, name: string);
    get(): any;
    set(value: any, _?: any): this;
}
export declare class DeviceProperties {
    slots: Slot[];
    Activate: number;
    AirRelease: number;
    Bpm: number;
    Charge: number;
    ClearMemory: number;
    CollectableGoods: number;
    Color: number;
    Combustion: number;
    CompletionRatio: number;
    CurrentResearchPodType: number;
    ElevatorLevel: number;
    ElevatorSpeed: number;
    Error: number;
    ExportCount: number;
    Filtration: number;
    ForceWrite: number;
    Fuel: number;
    Harvest: number;
    Horizontal: number;
    HorizontalRatio: number;
    Idle: number;
    ImportCount: number;
    Lock: number;
    ManualResearchRequiredPod: number;
    Maximum: number;
    MineablesInQueue: number;
    MineablesInVicinity: number;
    Mode: number;
    NextWeatherEventTime: number;
    On: number;
    Open: number;
    Output: number;
    Plant: number;
    PositionX: number;
    PositionY: number;
    PositionZ: number;
    Power: number;
    PowerActual: number;
    PowerGeneration: number;
    PowerPotential: number;
    PowerRequired: number;
    PrefabHash: number;
    Pressure: number;
    PressureExternal: number;
    PressureSetting: number;
    Quantity: number;
    Ratio: number;
    RatioCarbonDioxide: number;
    RatioNitrogen: number;
    RatioNitrousOxide: number;
    RatioOxygen: number;
    RatioPollutant: number;
    RatioVolatiles: number;
    RatioWater: number;
    Reagents: number;
    RecipeHash: number;
    RequestHash: number;
    RequiredPower: number;
    ReturnFuelCost: number;
    Setting: number;
    SettingInput: number;
    SettingOutput: number;
    SignalID: number;
    SignalStrength: number;
    SolarAngle: number;
    TargetX: number;
    TargetY: number;
    TargetZ: number;
    Temperature: number;
    TemperatureExternal: number;
    TemperatureSetting: number;
    Time: number;
    TotalMoles: number;
    VelocityMagnitude: number;
    VelocityRelativeX: number;
    VelocityRelativeY: number;
    VelocityRelativeZ: number;
    Vertical: number;
    VerticalRatio: number;
    Volume: number;
    constructor(scope: any);
    randomize(): void;
}
export declare class Device extends MemoryCell {
    #private;
    number: number;
    hash: number;
    get scope(): InterpreterIc10;
    properties: DeviceProperties;
    constructor(scope: InterpreterIc10, name: string, number: number);
    get(variable?: any): any;
    set(variable: any, value: any): this;
    getSlot(op1: any, op2?: any): any;
    setSlot(op1: any, op2: any, value: any): void;
}
export declare class Chip extends Device {
    #private;
    constructor(scope: any, name: string, number: number);
}
export declare class Slot {
    #private;
    number: number;
    get scope(): InterpreterIc10;
    properties: {
        Charge: number;
        ChargeRatio: number;
        Class: number;
        Damage: number;
        Efficiency: number;
        Growth: number;
        Health: number;
        Mature: number;
        MaxQuantity: number;
        OccupantHash: number;
        Occupied: number;
        PrefabHash: number;
        Pressure: number;
        PressureAir: number;
        PressureWaste: number;
        Quantity: number;
        Temperature: number;
    };
    constructor(scope: InterpreterIc10, number: number);
    get(op1: any): any;
    set(op1: any, value: any): void;
}
export declare class InterpreterIc10 {
    code: string;
    commands: {
        args: any[];
        command: string;
    }[];
    lines: string[];
    memory: Memory;
    position: number;
    interval: any;
    labels: {};
    constants: {};
    output: {
        debug: string;
        log: string;
        error: string;
    };
    settings: {
        debug: boolean;
        debugCallback: Function;
        logCallback: Function;
        executionCallback: Function;
        tickTime: number;
    };
    ignoreLine: Array<number>;
    constructor(code?: string, settings?: {});
    setSettings(settings?: object): InterpreterIc10;
    init(text: any): InterpreterIc10;
    stop(): InterpreterIc10;
    run(): this;
    prepareLine(line?: number, isDebugger?: boolean): any;
    __issetLabel(x: string): boolean;
    define(op1: any, op2: any, op3: any, op4: any): void;
    alias(op1: any, op2: any, op3: any, op4: any): void;
    l(op1: any, op2: any, op3: any, op4: any): void;
    __l(op1: any, op2: any, op3: any, op4: any): void;
    ls(op1: any, op2: any, op3: any, op4: any): void;
    s(op1: any, op2: any, op3: any, op4: any): void;
    __s(op1: any, op2: any, op3: any, op4: any): void;
    move(op1: any, op2: any, op3: any, op4: any): void;
    __move(op1: any, op2: any, op3: any, op4: any): void;
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
    atan2(op1: any, op2: any, op3: any, op4: any): void;
    yield(op1: any, op2: any, op3: any, op4: any): void;
    sleep(op1: any, op2: any, op3: any, op4: any): void;
    select(op1: any, op2: any, op3: any, op4: any): void;
    hcf(op1: any, op2: any, op3: any, op4: any): void;
    j(op1: any): void;
    jr(op1: number): void;
    jal(op1: number): void;
    __eq(op1?: number, op2?: number): number;
    __ge(op1?: number, op2?: number): number;
    __gt(op1?: number, op2?: number): number;
    __le(op1?: number, op2?: number): number;
    __lt(op1?: number, op2?: number): number;
    __ne(op1?: number, op2?: number): number;
    __ap(op1?: number, op2?: number, op3?: number, op4?: number): number;
    __na(x?: number, y?: number, d?: number, op4?: number): number;
    __dse(op1?: number, op2?: number, op3?: number, op4?: number): 0 | 1;
    __dns(op1?: number, op2?: number, op3?: number, op4?: number): 0 | 1;
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
    lb(op1: any, op2: any, op3: any, op4: any): void;
    lr(op1: any, op2: any, op3: any, op4: any): void;
    sb(op1: any, op2: any, op3: any, op4: any): void;
    and(op1: any, op2: any, op3: any, op4: any): void;
    or(op1: any, op2: any, op3: any, op4: any): void;
    xor(op1: any, op2: any, op3: any, op4: any): void;
    nor(op1: any, op2: any, op3: any, op4: any): void;
    _log(): void;
    _d0(op1: any): void;
    _d1(op1: any): void;
    _d2(op1: any): void;
    _d3(op1: any): void;
    _d4(op1: any): void;
    _d5(op1: any): void;
    __d(device: any, args: {}): void;
    __debug(p: string, iArguments: string[]): void;
}
