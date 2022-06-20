import { Document, HeadingLevel, Packer, Paragraph, SectionType } from 'docx';
import { saveAs } from 'file-saver';

export const categories = ['category1', 'category2', 'category3', 'category4', 'category5'];

const doc = (content, author, page) => {
  return (
    new Document({
      title: 'OncoConnect - About Us Page Briefing Template',
      creator: 'Brendan Meachen',
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: `OncoConnect - ${page} Page Briefing Template`,
              heading: HeadingLevel.TITLE
            }),
            new Paragraph({
              text: 'https://www.oncoconnect.co.uk'
            }),
            new Paragraph({
              text: `${author.name} - ${author.email}`
            }),
          ]
        },
        {
          properties: {
            type: SectionType.NEXT_PAGE
          },
          children: [
            new Paragraph({
              text: 'Page Content',
              heading: HeadingLevel.HEADING_1
            }),
            new Paragraph({
              text: content.heading,
              heading: HeadingLevel.HEADING_2
            }),
            new Paragraph({
              text: content.paragraph
            }),
            content.secParagraph ? (
              new Paragraph({
                text: content.secParagraph
              })
            ) : (
              new Paragraph({
                text: ''
              })
            ),
            new Paragraph({
              text: content.date
            }),
            new Paragraph({
              text: content.time
            }),
            new Paragraph({
              text: ''
            }),
            content.agendaItems ? (
              new Paragraph({
                text: 'Event Agenda',
                heading: HeadingLevel.HEADING_2
              })
            ) : (
              new Paragraph({
                text: ''
              })
            ),
            content.agendaItems ? (
              new Paragraph({
                text: `${JSON.stringify(content.agendaItems.map((a, i) => (`Agenda ${i} - Topic: ${a.topic}, Speaker: ${a.speaker}, Time: ${a.time}`)))}`
              })
            ) : (
              new Paragraph({
                text: ''
              })
            ),

            content.cats ? (
              new Paragraph({
                text: 'Categories',
                heading: HeadingLevel.HEADING_2
              })
            ) : (
              new Paragraph({
                text: ''
              })
            ),
            content.cats ? (
              new Paragraph({
                text: `${JSON.stringify(content.cats.map((c) => c))}`
              })
            ) : (
              new Paragraph({
                text: ''
              })
            ),

            new Paragraph({
              text: 'SEO Meta Data',
              heading: HeadingLevel.HEADING_1
            }),
            new Paragraph({
              text: 'Page title',
              heading: HeadingLevel.HEADING_2
            }),
            new Paragraph({
              text: content.title,
            }),
            new Paragraph({
              text: 'Page description',
              heading: HeadingLevel.HEADING_2
            }),
            new Paragraph({
              text:  content.description
            })
          ]
        }
      ]
    })
  )
}

export const generateDoc = (e, content, author, page) => {
  e.preventDefault();
  Packer.toBlob(doc(content, author, page)).then((blob) => {
    saveAs(blob, `${page}.docx`);
  });
}