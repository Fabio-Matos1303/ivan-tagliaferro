import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Conteúdo')
    .items([
      S.documentTypeListItem('heroSlide').title('Slides do Hero'),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('ebook').title('E-books'),
      S.divider(),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['heroSlide', 'post', 'ebook', 'category', 'author'].includes(item.getId()!),
      ),
    ])
