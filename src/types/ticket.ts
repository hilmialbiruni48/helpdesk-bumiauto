
export interface Ticket {
  ticketID: string; // Primary key
  code: string; // Auto-generated UUID code
  branch: string; // BYD branch, Hyundai branch, or Bumi Auto Head Office
  services: string; // Destination department of the service
  category: string; // Ticket category
  subCategory: string; // Ticket sub-category
  network: string; // Related system/account department
  subject: string; // Ticket title
  description: string; // Description of the submitted ticket
  ticketFile?: File | null; // File attachment uploaded by the user
  timestamp: Date; // Log of the time when the ticket was submitted
  
  // Keep existing fields for compatibility
  id: string;
  title: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignee?: 'ICT Department' | 'General Affair' | 'Human Capital' | 'Others';
  reporter: string; // Reporter name
  reporterEmail: string; // Reporter email
  reporterPhone: string; // Reporter phone
  reporterId: string; // Add user ID to associate tickets with users
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

export interface TicketFormData {
  branch: string;
  services: string;
  category: string;
  subCategory: string;
  network: string;
  subject: string;
  description: string;
  ticketFile?: File | null;
  
  // Keep existing fields for compatibility
  title: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  reporter: string;
  reporterEmail: string;
  reporterPhone: string;
  reporterId: string; // Add user ID
  tags: string[];
}
