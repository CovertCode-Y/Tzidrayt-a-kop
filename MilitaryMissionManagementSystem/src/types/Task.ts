export interface Task {
    id: string; 
    name: string; 
    status: 'Pending' | 'InProgress' | 'Completed';
    priority: 'Low' | 'Medium' | 'High'; 
    description: string;
}
