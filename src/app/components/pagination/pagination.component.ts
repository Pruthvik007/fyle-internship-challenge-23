import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Input() setPage!: (pageNumber: number) => void;

  constructor() {}

  get pages(): number[] {
    const startPage = this.currentPage - 2 > 0 ? this.currentPage - 2 : 1;
    const endPage =
      this.currentPage + 2 <= this.totalPages
        ? this.currentPage + 2
        : this.totalPages;
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  onPageChange(page: number) {
    if (this.currentPage !== page) {
      this.setPage(page);
    }
  }
}
