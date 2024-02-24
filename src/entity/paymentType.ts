export interface PaymentType{

    patId: number;  
    patName: string;
    patStatus: string;
    audDate: Date;
    audUser: string;
    
}

// INSERT INTO `plpay_payment_type` (`pat_id`, `aud_date`, `aud_user`, `pat_name`, `pat_status`) VALUES (NULL, '2023-11-16 13:51:45', 'cgonzalez@activos.com.co', 'Anual', 'A');