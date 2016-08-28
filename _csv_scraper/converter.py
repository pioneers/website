"""A quick script to format blog posts in Jekyll style

Note that the files created by this script are different from
the ones currently in posts/. They've been edited to avoid
duplicates, lost file errors, and consistent styling"""

import csv
from datetime import datetime

CSV_FILE = 'blog_entries.csv'

class post():
    """A convenient interface for post data"""

    # Constants for retrieving info from the csv list
    CONTENT = 1
    CREATION_DATE = 2
    SLUG = 12
    TAGS = 15
    TITLE = 17

    def __init__(self, row):
        self.content = row[self.CONTENT]
        self.creation_date = datetime.strptime(row[self.CREATION_DATE], '%Y-%m-%d %H:%M:%S')
        self.slug = row[self.SLUG]
        self.tags = row[self.TAGS].replace(",", "")
        self.title = row[self.TITLE]

    def __str__(self):
        """Returns the string form of the post data

        Abridges the post content to 10 characters
        """

        return str([self.content[:10], self.creation_date, self.slug, self.tags, self.title])

    def file_name(self):
        """Formats the file name to be read by Jekyll"""
        return datetime.strftime(self.creation_date, '%Y-%m-%d-') + self.slug + '.html'

    def file_content(self):

        # Gray Matter
        result = '---\n'
        result += 'layout: post\n'
        result += 'title: "%s"\n' % self.title
        result += 'date: %s\n' % datetime.strftime(self.creation_date, '%Y-%m-%d %H:%M:%S')
        result += 'categories: %s\n' % self.tags
        result += 'author: %s\n' % 'PiE Team'
        result += '---\n\n'

        #Content
        result += self.content
        return result

    def write_file(self):
        f = open(self.file_name(), 'w')
        f.write(self.file_content())
        f.close()

if __name__ == "__main__":
    with open( CSV_FILE,'r') as userFile:
        userFileReader = csv.reader(userFile)

        # Skip the label line
        next(userFileReader)

        post_list = []

        for row in userFileReader:
            post_list.append(post(row))

        for post in post_list:
            post.write_file()
