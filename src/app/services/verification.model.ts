export interface Verification {
    referenceCode: string;
    status: string;
}

export interface Ticket {
    serviceUid: string;
    ticketNo: string;
    ticketOwnerUid: string;
    refNo: string;
    timestamp: string;
}