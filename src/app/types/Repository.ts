export interface Repository {
  id: number;
  node_id: string;
  name: string;
  description: string | null;
  language: string;
  topics: string[];
  full_name: string;
  private: boolean;
  html_url: string;
  fork: boolean;
}
